import { VNode } from '@/lib/model'
import MiniReact from '@/react'
import Dynamic from '@/react-router-dom/dynamic-import'

export default function Loadable(props: { loader: () => Promise<any>; loading?: VNode }) {
    return <Dynamic {...props} />
}
