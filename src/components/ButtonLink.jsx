import classNames from "classnames"

const classes = {
  base: 'inline-block',
  color: {
    red: 'bg-red hover:bg-red-dark focus:bg-red-dark text-white',
    green: 'bg-green hover:bg-green-dark focus:bg-green-dark'
  },
  size: {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  }
}

function ButtonLink({ href="#", className, color='green', size='md', children, ...props }) {
  return (
    <a
      href={href}
      className={classNames(`
        ${classes.base}
        ${classes.color[color]}
        ${classes.size[size]}
        ${className}
      `)}
      {...props}
    >
      {children}
    </a>
  )
}

export default ButtonLink