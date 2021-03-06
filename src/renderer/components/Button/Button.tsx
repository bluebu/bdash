import React from "react";

interface ButtonProps {
  readonly onClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
  readonly className?: string;
}

export default class Button extends React.Component<ButtonProps> {
  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const className = `${this.props.className || ""} Button`.trim();
    return (
      <span className={className} onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </span>
    );
  }
}
