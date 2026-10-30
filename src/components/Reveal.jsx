import { useScrollReveal } from '../hooks/useScrollReveal.js'

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
