interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (personProfile: Profile, updateProfile: Partial<Profile>): Profile => {
    const update = { ...personProfile, ...updateProfile };
    return update;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

// console.log(updateProfile(myProfile, { name: 'Dodul' }));
