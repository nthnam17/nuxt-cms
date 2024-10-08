/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
    config.language = 'vi';
    // config.uiColor = '#AADC6E';
    config.entities = false;

    config.entities_latin = false;

    // config.contentsCss = '/frontend/font/SVN-Gilroy-Regular.otf';
    // config.font_names = 'WebFont-Regular;' + config.font_names;

    config.extraPlugins = 'btgrid';
};
