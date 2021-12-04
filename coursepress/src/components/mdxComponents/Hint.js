import React from 'react'
import MDX from '../MDX'
import DangerImg from  '../images/danger.svg'
import InfoImg from  '../images/info.svg'
import WarningImg from  '../images/warning.svg'


const Emoji = props => (
  <div
    className='emoji'
    role='img'
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </div>
)

const HintIcon = props => (
  <div
    className='hint-icon'
    role='img'
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.hintIcon}
  </div>
)


const getType = props => {

  switch (props['type']) {
    case 'danger' : return {
      symbol: '❗',
      className: 'hint-danger',
      image: 'DangerImg'
    }

    case "warning": return {
      symbol: '⚠️',
      className: 'hint-warning'
    }

    case "info":
    default: return {
      symbol: 'ℹ️',
      className: 'hint-info'
    }
  }
}

const Hint = props => {
  if (props['type'] == 'danger') {
    return (
      <div className={getType(props).className}>
        <div className='icon'>
          <img src={DangerImg} />
        </div>
        <div>{props.children}</div>
      </div>
    )
  } else if (props['type'] == 'warning') {
    return (
      <div className={getType(props).className}>
        <div className='icon'>
          <img src={WarningImg} />
        </div>
        <div className="content">{props.children}</div>
      </div>
    )
  } else {
    return (
      <div className='hint-info'>
        <div className='icon'>
          <img src={InfoImg} />
        </div>
        <div className="content">{props.children}</div>
    </div>
    )
  }
}

export default Hint
