import glamorous from 'glamorous'

export const colors = {
    blue: '#2895F1',
    gray: '#333333',
    grayLight: '#aaaaaa'
}

const linkStyles = {
    color: colors.blue,
    textDecoration: 'none'
}

export const Link = glamorous.a({
    ...linkStyles
})

export const Wrapper = glamorous.div({
    color: colors.gray,
    margin: '0 auto',
    maxWidth: '45em',
    width: '95%'
})

export const Title = glamorous.h1({
    color: colors.blue
})

export const SubTitle = glamorous.a({
    ...linkStyles,
    color: colors.grayLight,
})

export const List = glamorous.ul({
    listStyle: 'none',
    paddingLeft: 0
})

export const ListItem = glamorous.li({
    display: 'inline-block',
    paddingRight: '1em'
})
