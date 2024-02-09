
| [Main](README.md) | Installation | [Running &amp; Building](running-building.md) | [Testing](testing.md) | [Dependencies](dependencies.md) | [Credits](credits.md) |
|------|-------|-------|--------|--------|-------|

## Installation

1. __Set up alternative NPM registry__

    Before any `@ecocommons-australia` packages can be installed, you need to set an
    alternative registry into `npm` in order for it to be able to fetch requisite
    dependencies.

    To do this:
    ```bash
    npm config set @ecocommons-australia:registry https://gitlab.com/api/v4/packages/npm/
    ```

2. __Clone the project__

    ```bash
    git clone git@gitlab.com:ecocommons-australia/ecocommons-platform/analysis-tools-ui.git
    # or
    git clone https://gitlab.com/ecocommons-australia/ecocommons-platform/analysis-tools-ui.git
    ```

3. __Install dependencies__

    ```bash
    npm ci
    ```

4. __Customize environment__

    `.env.dev` provides a baseline of environment vars to get development done out of the box.
    Sometimes there is a need customize env, ie changing a backend API to point to a local instance.
   
    These type of changes should always be done in the override file `.env.local` (on git ignore list).

    ```bash
    cp .env.local.example .env.local
    ```