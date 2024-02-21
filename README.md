# ⏳ timefetcher

Displays how long it took to fetch from API's.

# Installation

```bash
npm install timefetcher
```

## Usage

```javascript
import timefetcher from 'timefetcher'

async function fetchData() {
  try {
    const url = 'https://api.spacexdata.com/v4/launches/upcoming';
    const data = await timefetcher(url, 'milliseconds', '✨ The URL returned a result, nice!');
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

fetchData();
```

<img src="https://github.com/inttter/create-ps/assets/73017070/5db7bfcb-b3aa-47ea-9195-e700ee842eaa">

# API

### `timefetcherr(url[, timeUnit[, successMessage]])`

Measures fetch time from the specified URL.

### `url` (`string`):

The URL to fetch the data from.

```javascript
const url = 'https://api.spacexdata.com/v4/launches/upcoming';
```

### `timeUnit` (`string`, default: `'milliseconds'`)

Defines the unit in the default success message (by default, in milliseconds).

You can use the following:

* `milliseconds` 
* `seconds` 
* `minutes`
* `hours`

```javascript
const data = await fetchtimer(url, 'seconds');
```

<img src="https://github.com/inttter/create-ps/assets/73017070/cb993255-27e2-46c8-9776-c8f3cdbb7665">

###  `successMessage` (`string`) (`optional`)

Defines a custom success message for when the URL returns a result.

```javascript
const data = await fetchtimer(url, 'seconds', '✨ The URL returned a result, nice!');
```

<img src="https://github.com/inttter/create-ps/assets/73017070/8e1ed5b4-dbbf-4e18-8af7-8b86a8065923">

# License

Licensed under the [MIT License](https://github.com/inttter/fetchtimer/blob/master/LICENSE).