import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType( 'blocks-course/todo-list-info', {
	edit: Edit,
	save,
} );
