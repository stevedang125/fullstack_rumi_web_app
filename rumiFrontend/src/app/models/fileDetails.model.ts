export class FileDetails {
    $key: string;
    file: File;
    url: string;
    progress: number;
    // createOn: Date = new Date();
    createOn: string = new Date().toString();
    
    name: string;

    constructor(file: File) {
        this.file = file;
    }
}