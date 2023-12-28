function executeCommand(type, value) {
    return fetch(`/execute-command?type=${type}&value=${value}`)
        .then(response => response.json())
        .then(data => {
            console.log('Command executed:', data);
        })
        .catch(error => {
            console.error('Error executing command:', error);
        });
}

function generateRoute() {
    const routeName = prompt("Please enter the route name:");
    if (routeName) {
        executeCommand('route', routeName);
    }
}

function generateModel() {
    const modelName = prompt("Please enter the model name:");
    if (modelName) {
        executeCommand('model', modelName);
    }
}

function generateFeature() {
    const featureName = prompt("Please enter the feature name:");
    if (featureName) {
        executeCommand('feature', featureName);
    }
}

function generateController() {
    const controllerName = prompt("Please enter the controller name:");
    if (controllerName) {
        executeCommand('controller', controllerName);
    }
}

function generateMiddleware() {
    const middlewareName = prompt("Please enter the middleware name:");
    if (middlewareName) {
        executeCommand('middleware', middlewareName);
    }
}

function generateController() {
    const controllerName = prompt("Please enter the controller name:");
    if (controllerName) {
        executeCommand('controller', controllerName);
    }
}
