import { defineConfig } from "astro/config";

//luego cambiar con el dominio de la pagina
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact()]
});