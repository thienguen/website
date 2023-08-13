import { Tooltip } from '../common/Tooltip'

type headerTitleProps = {
  title?: string
  titleJP?: string
}

function PageTitle(props: headerTitleProps) {
  return (
    <div className="my-3 text-center">
      <Tooltip text={props.title ?? ''}>
        <h2 className="text-xl font-semibold">{`${props.titleJP ?? ''}`}</h2>
      </Tooltip>
    </div>
  )
}

export default PageTitle
