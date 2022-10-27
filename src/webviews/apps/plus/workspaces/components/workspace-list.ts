import { attr, css, customElement, FASTElement, html, repeat, volatile, when } from '@microsoft/fast-element';
import { srOnly } from '../../../shared/components/styles/a11y';
import { elementBase } from '../../../shared/components/styles/base';

const template = html<WorkspaceList>`
	<template role="table">
		<div class="thead" role="rowgroup">
			<div class="row" role="row">
				<div class="cell cell--header sr-only" role="columnheader">Row selection</div>
				<div class="cell cell--header" role="columnheader">Workspace</div>
				<div class="cell cell--header" role="columnheader">Description</div>
				<div class="cell cell--header" role="columnheader"># of repos</div>
				<div class="cell cell--header" role="columnheader">Latest update</div>
				<div class="cell cell--header" role="columnheader">Shared with</div>
				<div class="cell cell--header" role="columnheader">Owner</div>
				<div class="cell cell--header" role="columnheader"><span class="sr-only">Workspace actions</span></div>
			</div>
		</div>
		<div class="tbody" role="rowgroup">
			<slot>
				<div class="row" role="row">
					<div class="cell sr-only" role="cell"></div>
					<div class="cell" role="cell">No workspaces</div>
					<div class="cell" role="cell"></div>
					<div class="cell" role="cell"></div>
					<div class="cell" role="cell"></div>
					<div class="cell" role="cell"></div>
					<div class="cell" role="cell"></div>
					<div class="cell" role="cell"></div>
				</div>
			</slot>
		</div>
	</template>
`;

const styles = css`
	${elementBase}

	:host {
		display: table;
		border-collapse: collapse;
		width: 100%;
	}

	.thead {
		display: table-header-group;
		color: var(--table-heading);
	}

	.tbody {
		display: table-row-group;
		color: var(--table-text);
	}

	.row {
		display: table-row;
	}

	.cell {
		display: table-cell;
		vertical-align: middle;
		padding: 0.8rem 1.2rem;
		border-bottom: 1px solid var(--table-separator);
	}

	.cell--header {
		text-align: left;
		text-transform: uppercase;
		font-weight: normal;
		padding: 0 1.2rem 1.2rem;
	}

	${srOnly}
`;

@customElement({ name: 'workspace-list', template: template, styles: styles })
export class WorkspaceList extends FASTElement {}
