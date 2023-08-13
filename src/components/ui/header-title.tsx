import { Tooltip } from '../common/Tooltip'

type headerTitleProps = {
  title?: string
  titleJP?: string
}

function HeaderTitleComponent(props: headerTitleProps) {
  return (
    <div className="my-3 text-center">
      <Tooltip text={props.title ?? ''}>
        <h2 className="font-dosis text-xl">{`${props.titleJP ?? ''}`}</h2>
      </Tooltip>
    </div>
  )
}

export default HeaderTitleComponent
