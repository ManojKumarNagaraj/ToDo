import { IButton } from './button.props';

const theme: { [key: string]: string } = {
    colorPrimary: 'green'
}

export const buttonStyle = (theme: { [key: string]: string }) => ({
    button: {
        background: theme.colorPrimary
    }
})

export type IButtonStyle = ReturnType<typeof buttonStyle>;