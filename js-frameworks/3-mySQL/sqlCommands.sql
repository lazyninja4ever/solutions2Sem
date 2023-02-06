--setting up tables
create table customer(
   id int unsigned not null AUTO_INCREMENT,
   name varchar(500) not null,
   address varchar(500) not null,
   primary key(id)
);

create table product(
   id int unsigned not null AUTO_INCREMENT,
   name varchar(100) not null,
   stock int(4) unsigned not null,
   price_kroner mediumint not null,
   price_ore smallint(2) not null,
   primary key(id)
);

create table `order`(
   orderNumber int unsigned not null AUTO_INCREMENT,
   status enum('pending', 'processing', 'shipped', 'delivered') not null,
   paid boolean DEFAULT false not null,
   orderDate date not null,
   customer int unsigned not null,
   product int unsigned not null,
   primary key(orderNumber),
   FOREIGN key(customer) REFERENCES customer (id),
   FOREIGN key(product) REFERENCES product (id)
);

--indsætte data i customer
INSERT INTO customer (name, address) 
VALUES ('Benny Johnson', 'Street 24, 0101 City, Denmark');
INSERT INTO customer (name, address) 
VALUES ('John Bennysen', 'Street 1, 4444 Small Town, Denmark');

--indsæt data i product
INSERT INTO product (name, stock, price_kroner, price_ore)
VALUES ('bottle', 15, 39, 95);
INSERT INTO product (name, stock, price_kroner, price_ore)
VALUES ('pen', 5, 5, 50);
INSERT INTO product (name, stock, price_kroner, price_ore)
VALUES ('clip', 1500, 0, 05);

--indsæt data i orders
INSERT INTO `order` (customer, orderDate, paid, product, `status`)
VALUES (1, '2023-02-03', true, 2, 'pending');
INSERT INTO `order` (customer, orderDate, paid, product, `status`)
VALUES (2, '2022-10-04', true, 1, 'shipped');
INSERT INTO `order` (customer, orderDate, paid, product, `status`)
VALUES (1, '2021-06-15', true, 3, 'delivered');
INSERT INTO `order` (customer, orderDate, paid, product, `status`)
VALUES (2, '2023-02-01', true, 2, 'pending');
INSERT INTO `order` (customer, orderDate, paid, product, `status`)
VALUES (1, '2023-01-19', true, 3, 'processing');

--udhent data om kunde og produkt
SELECT customer.name, product.name 
FROM customer 
JOIN `order` 
ON customer.id = `order`.customer 
JOIN product 
ON product.id = `order`.`product`
WHERE customer.id = 1;

--total en kunde har betalt for alle sine ordrer
SELECT ROUND(SUM(price_kroner + (price_ore/100)),2) 
FROM product 
JOIN `order` 
ON product.id = `order`.`product`
JOIN customer
ON `order`.customer = customer.id
WHERE customer.id = 1;

