CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName NVARCHAR(50),
    ContactName NVARCHAR(50),
    Country NVARCHAR(50)
);


INSERT INTO Customers (CustomerID, CustomerName, ContactName, Country)
VALUES (1, 'Mhamed', 'LEHBAB', 'DZ');
