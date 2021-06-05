import { ClassifierData } from './classifier.types';

export class Classifier implements ClassifierData {
    classifier_name: string;
    classifier_version: string;
    classes: string[];

    constructor(data: ClassifierData) {
        this.classifier_name = data.classifier_name
        this.classifier_version = data.classifier_version
        this.classes = data.classes
    }

}
