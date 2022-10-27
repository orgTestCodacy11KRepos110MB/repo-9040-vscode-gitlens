import type { State } from '../../../../plus/webviews/workspaces/protocol';
import { App } from '../../shared/appBase';
import '../../shared/components/codicon';
import '../../shared/components/avatars/avatar-item';
import '../../shared/components/avatars/avatar-stack';
import './components/workspace-list';
import './components/workspace-item';
import './workspaces.scss';

export class WorkspacesApp extends App<State> {
	constructor() {
		super('WorkspacesApp');
	}
}

new WorkspacesApp();
