import * as React from 'react';
import cx from 'classnames';
import Popover from '../popover';
import TagList from './TagList';
import Option from './Option';
import Search from './Search';
import { DisabledContext, IDisabledContext } from '../disabled';
import WindowEventHandler from '../utils/component/WindowEventHandler';

export interface ISelectItem<Key extends string | number = string | number> {
  key: Key;
  text: React.ReactNode;
  type?: 'header' | 'divider';
  disabled?: boolean;
}

export interface IOptionRenderer<Item extends ISelectItem> {
  (item: Item, index: number): React.ReactNode;
}

export interface ISelectCommonProps<Item extends ISelectItem> {
  keyword?: string;
  onKeywordChange?: (keyword: string) => void;
  options: Item[];
  isEqual: (a: Item, b: Item) => boolean;
  placeholder?: string;
  optionPlaceholder?: string;
  inline?: boolean;
  width: React.CSSProperties['width'];
  filter?: ((keyword: string, item: Item) => boolean) | false;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  renderOptionList<Item extends ISelectItem>(
    options: Item[],
    renderOption: IOptionRenderer<Item>
  ): React.ReactNode;
  renderValue?: (value: Item) => React.ReactNode;
  renderOptionContent?: (value: Item) => React.ReactNode;
}

export interface ISelectSingleProps<Item extends ISelectItem>
  extends ISelectCommonProps<Item> {
  value?: Item | null;
  multiple: false;
  onChange?: (value: Item | null) => void;
}

export interface ISelectMultiProps<Item extends ISelectItem>
  extends ISelectCommonProps<Item> {
  value?: Item[];
  multiple: true;
  onChange?: (value: Item[]) => void;
}

export type ISelectProps<Item extends ISelectItem = ISelectItem> =
  | ISelectSingleProps<Item>
  | ISelectMultiProps<Item>;

export interface ISelectState<Item extends ISelectItem> {
  open: boolean;
  active: boolean;
  keyword: string;
  value: null | Item | Item[];
  activeIndex: null | number;
  prevOptions: Item[];
}

function defaultIsEqual<Item extends ISelectItem>(a: Item, b: Item) {
  return a.key === b.key;
}

function defaultFilter<Item extends ISelectItem>(
  keyword: string,
  option: Item
): boolean {
  if (typeof option.text !== 'string') {
    return true;
  }
  return option.text.includes(keyword);
}

function defaultRenderOptionList<Item extends ISelectItem>(
  options: Item[],
  renderOption: IOptionRenderer<Item>
) {
  return options.map(renderOption);
}

function isSelectable<Item extends ISelectItem>(item: Item) {
  return !item.disabled && !item.type;
}

function findNextSelectableOption<Item extends ISelectItem>(
  options: Item[],
  start: number
): number | null {
  for (let i = start; i < options.length; i += 1) {
    if (isSelectable(options[i])) {
      return i;
    }
  }
  return null;
}

function findPrevSelectableOption<Item extends ISelectItem>(
  options: Item[],
  start: number
) {
  for (let i = start; i >= 0; i -= 1) {
    if (isSelectable(options[i])) {
      return i;
    }
  }
  return null;
}

export class Select<
  Item extends ISelectItem = ISelectItem
> extends React.Component<ISelectProps<Item>, ISelectState<Item>> {
  static defaultProps = {
    isEqual: defaultIsEqual,
    renderOptionList: defaultRenderOptionList,
    width: 240,
    multiple: false,
  };

  static contextType = DisabledContext;
  context!: IDisabledContext;

  elementRef = React.createRef<HTMLDivElement>();
  popoverRef = React.createRef<Popover>();

  constructor(props: ISelectProps<Item>) {
    super(props);
    let value: null | Item | Item[];
    if (props.multiple) {
      value = props.value || [];
    } else {
      value = props.value || null;
    }
    this.state = {
      keyword: props.keyword || '',
      value,
      open: false,
      active: false,
      activeIndex: null,
      prevOptions: props.options,
    };
  }

  get disabled() {
    const { disabled = this.context.value } = this.props;
    return disabled;
  }

  onVisibleChange = (open: boolean) => {
    if (this.disabled) {
      return;
    }
    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(open);
    } else {
      this.setState({
        open,
        active: open,
        activeIndex: null,
      });
    }
  };

  onSelect = (item: Item) => {
    if (item.disabled || item.type || this.disabled) {
      return;
    }
    if (this.props.multiple === false) {
      this.onVisibleChange(false);
      const { onChange } = this.props;
      if (onChange) {
        onChange(item);
      } else {
        this.setState({
          value: item,
        });
      }
    } else {
      const { onChange, isEqual } = this.props;
      const value = this.state.value as Item[];
      if (value.findIndex(it => isEqual(it, item)) >= 0) {
        return;
      }
      const nextValue = value.concat([item]);
      if (onChange) {
        onChange(nextValue);
      } else {
        this.setState({
          value: nextValue,
        });
      }
    }
  };

  onKeywordChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (this.disabled) {
      return;
    }
    const { onKeywordChange: onKeyWordChange } = this.props;
    if (onKeyWordChange) {
      onKeyWordChange(e.target.value);
    } else {
      this.setState({
        keyword: e.target.value,
      });
    }
  };

  onRemove = (item: Item) => {
    if (this.disabled) {
      return;
    }
    if (this.props.multiple === true) {
      const { value } = this.state;
      const { onChange, isEqual } = this.props;
      const nextValue = (value as Item[]).filter(it => !isEqual(item, it));
      if (onChange) {
        onChange(nextValue);
      } else {
        this.setState({
          value: nextValue,
        });
      }
    } else {
      const { onChange, isEqual } = this.props as ISelectSingleProps<Item>;
      const value = this.state.value as Item | null;
      if (value && isEqual(value, item)) {
        return;
      }
      if (onChange) {
        onChange(item);
      } else {
        this.setState({
          value: item,
        });
      }
    }
  };

  onOptionMouseEnter = (index: number) => {
    if (this.disabled) {
      return;
    }
    this.setState({
      activeIndex: index,
    });
  };

  onOptionMouseLeave = (index: number) => {
    if (this.disabled) {
      return;
    }
    this.setState(state =>
      state.activeIndex === index
        ? {
            activeIndex: null,
          }
        : null
    );
  };

  selectCurrentIndex = () => {
    if (this.disabled) {
      return;
    }
    const { activeIndex } = this.state;
    const { options } = this.props;
    if (activeIndex !== null) {
      this.onSelect(options[activeIndex]);
    }
  };

  renderOption: IOptionRenderer<Item> = (option: Item, index: number) => {
    const { isEqual, multiple, renderOptionContent } = this.props;
    const { value, activeIndex } = this.state;
    const selected =
      !!value &&
      (multiple
        ? (value as Item[]).findIndex(it => isEqual(it, option)) >= 0
        : isEqual(value as Item, option));
    return (
      <Option
        key={option.key}
        value={option}
        selected={selected}
        active={index === activeIndex}
        onSelect={this.onSelect}
        index={index}
        onMouseEnter={this.onOptionMouseEnter}
        onMouseLeave={this.onOptionMouseLeave}
        multiple={multiple}
      >
        {renderOptionContent ? renderOptionContent(option) : option.text}
      </Option>
    );
  };

  globalClick = (e: MouseEvent) => {
    if (
      this.disabled ||
      this.state.open ||
      !this.state.active ||
      !this.elementRef.current ||
      !this.popoverRef.current
    ) {
      return;
    }
    if (!this.elementRef.current.contains(e.target as Element)) {
      this.setState({
        active: false,
      });
    }
  };

  onIndexChange = (delta: 1 | -1) => {
    if (this.disabled) {
      return;
    }
    this.setState((state, { options }) => {
      let nextIndex: number;
      if (state.activeIndex === null) {
        if (delta < 0) {
          nextIndex = options.length - 1;
        } else {
          nextIndex = 0;
        }
      } else {
        nextIndex = state.activeIndex + delta;
      }
      if (nextIndex >= options.length) {
        nextIndex = options.length - 1;
      }
      if (nextIndex < 0) {
        nextIndex = 0;
      }
      if (!isSelectable(options[nextIndex])) {
        let enabled: number | null;
        if (delta > 0) {
          enabled = findNextSelectableOption(options, nextIndex);
        } else {
          enabled = findPrevSelectableOption(options, nextIndex);
        }
        if (!enabled) {
          return null;
        }
        nextIndex = enabled;
      }
      if (state.activeIndex === nextIndex) {
        return null;
      }
      return {
        activeIndex: nextIndex,
      };
    });
  };

  static getDerivedStateFromProps<Item extends ISelectItem = ISelectItem>(
    props: ISelectProps<Item>,
    state: ISelectState<Item>
  ): Partial<ISelectState<Item>> | null {
    const nextState: Partial<ISelectState<Item>> = {
      prevOptions: props.options,
    };
    if (typeof props.keyword === 'string') {
      nextState.keyword = props.keyword;
    }
    if (typeof props.open === 'boolean') {
      nextState.open = props.open;
      nextState.active = props.open;
    }
    if (props.multiple) {
      if (Array.isArray(props.value)) {
        nextState.value = props.value;
      }
    } else {
      if ('value' in props) {
        nextState.value = props.value;
      }
    }
    if (props.options !== state.prevOptions && state.activeIndex !== null) {
      if (!props.options.length) {
        nextState.activeIndex = null;
      } else {
        if (state.activeIndex >= props.options.length) {
          nextState.activeIndex = props.options.length - 1;
        }
      }
    }
    return nextState;
  }

  renderValue() {
    const { placeholder, renderValue } = this.props;
    const { open: visible } = this.state;
    if (this.props.multiple) {
      const value = this.state.value as Item[];
      return (
        <TagList
          list={value}
          onRemove={this.onRemove}
          renderValue={renderValue}
        />
      );
    } else {
      if (visible) {
        return null;
      }
      const value = this.state.value as Item | null;
      if (value) {
        return renderValue ? renderValue(value) : value.text;
      }
      return <span className="zent-select-placeholder">{placeholder}</span>;
    }
  }

  getSearchPlaceholder(): string {
    const { placeholder } = this.props;
    if (this.props.multiple) {
      if ((this.state.value as Item[]).length) {
        return '';
      }
      return placeholder;
    }
    const value = this.state.value as Item | null;
    if (!value || typeof value.text !== 'string') {
      return placeholder;
    }
    return value.text;
  }

  render() {
    const { keyword, open: visible, active } = this.state;
    const {
      inline,
      options,
      renderOptionList,
      optionPlaceholder = '无搜索结果',
      width,
      filter = defaultFilter,
    } = this.props;
    const filtered =
      filter !== false && keyword
        ? options.filter(it => filter(keyword, it))
        : options;
    return (
      <>
        <Popover
          ref={this.popoverRef}
          position={Popover.Position.AutoBottomLeft}
          visible={visible}
          onVisibleChange={this.onVisibleChange}
          className="zent-select-popover"
          style={{ width }}
        >
          <Popover.Trigger.Click>
            <div
              ref={this.elementRef}
              className={cx('zent-select', {
                'zent-select-inline': inline,
                'zent-select-active': active,
                'zent-select-visible': visible,
                'zent-select-disabled': this.disabled,
              })}
              style={{ width }}
            >
              {this.renderValue()}
              {visible && (
                <Search
                  placeholder={this.getSearchPlaceholder()}
                  value={keyword}
                  onChange={this.onKeywordChange}
                  onIndexChange={this.onIndexChange}
                  onEnter={this.selectCurrentIndex}
                />
              )}
            </div>
          </Popover.Trigger.Click>
          <Popover.Content>
            {filtered?.length ? (
              renderOptionList(filtered, this.renderOption)
            ) : (
              <div className="zent-select-popover-empty">
                {optionPlaceholder}
              </div>
            )}
          </Popover.Content>
        </Popover>
        <WindowEventHandler
          eventName="click"
          listener={this.globalClick}
          options={{ capture: true }}
        />
      </>
    );
  }
}

export default Select;
