import React from "react";
import { IButton } from "./button.props";

export class ButtonBase extends React.Component<IButton> {
    constructor(props: IButton) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <button className={classes.button}></button>
        )
    }
}