import Component from '@/react/component'
import MiniReact from '@/react/index'
import { register, unRegister, updateRoutes, matchPath } from '../router'

export class Route extends Component {
    public componentWillMount() {
        addEventListener('popstate', this.handlePop)
        register(this)
    }

    public componentWillUnmount() {
        removeEventListener('popstate', this.handlePop)
        unRegister(this)
    }

    public handlePop = () => updateRoutes()

    public render() {
        const { path, exact, component } = this.props
        const match = matchPath(path, exact )

        if (!match) {
            return ''
        }

        if (component) {
            return <div className={this.props.className}>{component}</div>
        }

        return ''
    }
}