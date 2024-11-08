# The significance of union and intersection types in Typescript.

## Union Type

Union types allows a variable to hold values of multiple types. It's defined using type pipe (|) operator, sperading the possible types. For example , a variable can be defined :
</br>

<b>Example</b>:

```typescript

let value: number | string;
let profileStatus : 'Acive' | 'Incative';

profileStatus = "Acive"

```
Meaning it can store eather string or a number. Union types provide flexibility while maintaining type safety, ensuring that only the specified types are assigned. Typescript also allows nerrowing the type using conditions ensuring more precise handling of value.

## Intersection In TypeScript
Intersection type in typescript combines multiple types into one. This allows you to create a new type that has all the Properties and methods form the combined types. The & operator is used to define intersection type. For example if you havea UserInfo type and a UserFinanceInfo type you can combine then into a User type using intersection.
</br>

<b>Example: </b>:

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
```

This new User type will contain all the properties of both UserInfo and UserFinanceInfo, ensuring the result type has all the features of the original type combined, Including Id, user_name, age, email, account_id, balance and transiction_history.