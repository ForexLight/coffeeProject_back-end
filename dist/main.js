"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("./pipes/validation.pipe");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 3000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('nest app')
        .setDescription('rest api documentation')
        .setVersion('1.0.0')
        .build();
    const documentation = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, documentation);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    await app.listen(PORT, () => {
        console.log('server started on http://localhost:' + PORT);
    });
}
start();
//# sourceMappingURL=main.js.map