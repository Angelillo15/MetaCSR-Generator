export interface config {
    project?: string,
    version?: string,
    description?: string,
    baseHtmlPath: string,
    distPath?: string,
    routes: route[],
}

export interface route {
    name: string,
    path: string,
    description?: string,
    replaceMap?: replaceMap[]
}

export interface replaceMap {
    search: string,
    replace: string
}

export default config;