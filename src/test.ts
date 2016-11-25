// this file is only being used by karma

const context: any = (<any>require).context('./', true, /spec.ts$/);
context.keys().forEach(context);
