export interface Ilogin{
    email : string;
    password : string;
}
export interface IsignUp{
    email : string;
    password : string;
    userRol : 'admin' | 'superAdmin' | 'buyer'
}