// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`, // переносим эти файлы вот сюда 
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        js: `${buildFolder}/js/`,
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`, // .pug
        files: `${srcFolder}/files/**/*.*`, // берем все фалы с src с люббым расширением
        js: `${srcFolder}/js/app.js`,
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, // .pug
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,webp}`,
        files: `${srcFolder}/files/**/*.*`,
        js: `${srcFolder}/**/*.js`,
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
