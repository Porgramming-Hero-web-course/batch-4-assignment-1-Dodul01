# The significance of union and intersection types in Typescript.

## Union Type

Union types are used when a value can be more then a single type. such as when a property would be <b>String</b> or <b>Number</b>. Using the <b>|</b> we can write an union type. 
</br></br>
Here is an example of Union Type:

<b>Example</b>:

```typescript

let value: number | string;
let profileStatus : 'Acive' | 'Incative';

profileStatus = "Acive"

```
This is how we can write union type where we can add multiple type.

## Intersection In TypeScript
Intersection Combines multiple types into one. This allows to add together existing types to get a single type that has all the features.
</br></br>
Here is an example of Union Type:

<b>Example</b>:

```typescript
type UserInfo = {
    id: string;
    user_name: string;
    age: string;
    email: string;
}

type UserFinanceInfo = {
    account_id: string;
    balance: number;
    transaction_history: string[];
}

type User = UserInfo & UserFinanceInfo;

const user: User = {
    id: 'ljasldfjlksadjf',
    user_name: 'Mozammel Hoque Dudul',
    age: '30',
    email: 'mozammel@example.com',
    account_id: 'acc-12345',
    balance: 5000,
    transaction_history: ['txn1', 'txn2', 'txn3']
}
