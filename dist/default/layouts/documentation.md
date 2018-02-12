This example API documentation page. Feel free to edit it and use it as a base for your own API's documentation.

Provides catalog management, order management, and daily specials functionality for the Acme Commerce Platform.

## Resource URIs

[GET](#deal): `/v1/deal/`
[GET](#order): `/v1/order/`
[GET](#catalog): `/v1/product/{productId}`

## Daily Deal

Get details of daily special

`GET: /v1/deal/` | [Try it](/io-docs?api=Acme+Commerce+API)

### Response

```js
{
    "dailyDealId": "7815",
    "discountPercentage": "0",
    "product": {
        "productId": "1010",
        "brandId": "105",
        "departmentId": "3",
        "name": "Tommy Hilfiger Kids Sweater, Boys Jake Argyle Sweater",
        "description": "The perfect preppy addition to his seasonal attire is this mock neck quarter-zip from Tommy Hilfiger. Bullet(s) Quarter-zip styling; argyle pattern.",
        "url": "http://developer.wideworldofacme.com/files/argyle.tif"
    }
}
```

## Order

Place a new order

`GET: /v1/deal/` | [Try it](/io-docs?api=Acme+Commerce+API)

### Response

```js
{
    "orderId": "319297577",
    "orderDate": "10 May 2016 23:45:48 GMT",
    "status": "Complete"
}
```

## Catalog

get a listing of products from the catalog

`GET: /v1/product/{productId}` | [Try it](/io-docs?api=Acme+Commerce+API)

### Parameters

| Name | Description | Type | Required |
|------|-------------|------|-----------|
| {productId} | The product ID | String | No

### Response

```js
{
    "productId": "1001",
    "brandId": "101",
    "departmentId": "1",
    "name": "RLX Ralph Lauren Jacket, Paneled Interlock Fleece Track Jacket ",
    "description": "Exquisitely crafted from tight-knit interlock cotton yarns, a full-zip fleece jacket exudes modern style with a smooth, clean face and a luxuriously soft hand.",
    "url": "http://developer.wideworldofacme.com/files/RL_Fleece.tif"
}
```