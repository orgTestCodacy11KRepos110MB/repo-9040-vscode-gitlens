import { Commands } from '../../../constants';
import type { Container } from '../../../container';
import { WebviewBase } from '../../../webviews/webviewBase';
import type { State } from './protocol';

export class WorkspacesWebview extends WebviewBase<State> {
	constructor(container: Container) {
		super(
			container,
			'gitlens.workspaces',
			'workspaces.html',
			'images/gitlens-icon.png',
			'Workspaces',
			'workspacesWebview',
			Commands.ShowWorkspacesPage,
		);
	}
}
