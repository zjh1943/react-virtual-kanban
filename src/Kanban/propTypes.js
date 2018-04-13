import { PropTypes } from 'react';

export const lists = PropTypes.array;
export const width = PropTypes.number;
export const listWidth = PropTypes.number;
export const height = PropTypes.number;
export const listRenderer = PropTypes.func;
export const itemRenderer = PropTypes.func;
export const itemPreviewRenderer = PropTypes.func;
export const listPreviewRenderer = PropTypes.func;
export const onMoveRow = PropTypes.func;
export const onMoveList = PropTypes.func;
export const onDropRow = PropTypes.func;
export const onDropList = PropTypes.func;
export const onDragEndRow = PropTypes.func;
export const overscanListCount = PropTypes.number;
export const overscanRowCount = PropTypes.number;
export const scrollToList = PropTypes.number;
export const scrollToAlignment = PropTypes.string;
export const itemCacheKey = PropTypes.func;
export const defaultCardHeight = PropTypes.number;
