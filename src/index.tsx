import React, {memo, forwardRef} from 'react'

interface IFormProps extends React.HTMLAttributes<HTMLFormElement> {
  name: string,
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  children: React.ReactNode
}

const Form: React.ForwardRefRenderFunction<HTMLFormElement, IFormProps> = (props, ref) => {
  return (
    <>
      <iframe name={props.name} src="about:blank" style={{display: 'none'}}></iframe>
      <form target={props.name} method={props.method} action="about:blank" ref={ref} style={{width: '100%'}} {...props}
        onKeyPress={(e) => {
          if (e.key == 'Enter') e.preventDefault()
        }}>
        {props.children}
      </form>
    </>
  )
}

export default memo(forwardRef(Form))