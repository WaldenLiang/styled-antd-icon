import React from 'react';
import { antd, forwardRef, type HtmlAntdProps } from 'styled-antd';
import { cx } from './utils';

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: '0 0 24 24',
};

export interface IconProps extends HtmlAntdProps<'svg'> {}

/**
 * The Icon component renders as an svg element to help define your own custom components.
 */
export const Icon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const {
    as: element,
    viewBox,
    color = 'currentColor',
    focusable = false,
    children,
    className,
    ...rest
  } = props;

  const _className = cx('styled-antd-icon', className);

  const shared: any = {
    ref,
    focusable,
    className: _className,
    w: '1em',
    h: '1em',
    display: 'inline-block',
    lineHeight: '1em',
    flexShrink: 0,
    color,
  };

  const _viewBox = viewBox ?? fallbackIcon.viewBox;

  /**
   * If you're using an icon library like `react-icons`.
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */
  if (element && typeof element !== 'string') {
    return <antd.svg as={element} {...shared} {...rest} />;
  }

  const _path = (children ?? fallbackIcon.path) as React.ReactNode;

  return (
    <antd.svg verticalAlign="middle" viewBox={_viewBox} {...shared} {...rest}>
      {_path}
    </antd.svg>
  );
});

Icon.displayName = 'Icon';
