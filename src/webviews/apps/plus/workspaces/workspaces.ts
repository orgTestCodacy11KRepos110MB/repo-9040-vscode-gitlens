import type { State } from '../../../../plus/webviews/workspaces/protocol';
import { App } from '../../shared/appBase';
import './workspaces.scss';

export class WorkspacesApp extends App<State> {
	constructor() {
		super('WorkspacesApp');
	}
}

new WorkspacesApp();
