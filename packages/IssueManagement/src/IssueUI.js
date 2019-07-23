import Loadable from 'react-loadable'

export const LoadableBar = Loadable({
    loader: () => import('IssueManagementUi'),
    loading() {
      return <div>Loading...</div>
    }
  });