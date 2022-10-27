import { attr, css, customElement, FASTElement, html, ref, repeat, volatile, when } from '@microsoft/fast-element';
import { focusOutline, srOnly } from '../../../shared/components/styles/a11y';
import { elementBase } from '../../../shared/components/styles/base';

const template = html<WorkspaceItem>`
	<template role="row" @click="${(x, c) => x.selectRow(c.event)}">
		<td class="sr-only">
			<button type="button">select workspace</button>
		</td>
		<td>
			<slot name="name"></slot>
		</td>
		<td>
			<slot name="description"></slot>
		</td>
		<td ${ref('count')}>
			<slot name="count"></slot>
		</td>
		<td>
			<slot name="updated"></slot>
		</td>
		<td ${ref('shared')}>
			<slot name="shared"></slot>
		</td>
		<td>
			<slot name="owner"></slot>
		</td>
		<td class="actions" ${ref('actions')}>
			<slot name="actions"></slot>
		</td>
	</template>
`;

const styles = css`
	${elementBase}

	:host {
		display: table-row;
		cursor: pointer;
	}

	:host(:hover),
	:host(:focus-within) {
		background-color: var(--background-05);
	}

	:host(:focus) {
		${focusOutline}
	}

	td {
		padding: 0.8rem 1.2rem;
		border-bottom: 1px solid var(--table-separator);
		vertical-align: middle;
	}

	.actions {
		text-align: right;
	}

	${srOnly}
`;

@customElement({ name: 'workspace-item', template: template, styles: styles, shadowOptions: { delegatesFocus: true } })
export class WorkspaceItem extends FASTElement {
	actions!: HTMLElement;
	count!: HTMLElement;
	shared!: HTMLElement;

	selectRow(e: Event) {
		const path = e.composedPath();
		// exclude events triggered from a slot with actions
		if ([this.actions, this.count, this.shared].find(el => path.indexOf(el) > 0) !== undefined) {
			return;
		}

		console.log('WorkspaceItem.selectRow', e, path);
		this.$emit('selected');
	}
}
