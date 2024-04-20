
--DESKTOP-N28DKIE

CREATE TABLE Employees (
    EMP_ID INT PRIMARY KEY identity(1000,1),
    EMP_NAME NVARCHAR(255) NOT NULL,
    EMP_EMAIL NVARCHAR(255) NOT NULL UNIQUE,
    EMP_PHONE NVARCHAR(100) NOT NULL,
    EMP_PASS NVARCHAR(255) NOT NULL,
    TOTAL_LEAVE INT DEFAULT 20
);

CREATE TABLE Managers (
    M_NAME NVARCHAR(255) NOT NULL,
    M_EMAIL NVARCHAR(255) NOT NULL PRIMARY KEY,
    M_PHONE NVARCHAR(100) NOT NULL,
    M_PASS NVARCHAR(255) NOT NULL,
    ISADMIN BIT 
);
CREATE TABLE LeaveRequests (
    RequestID INT PRIMARY KEY IDENTITY(1,1),
    EmpId INT REFERENCES Employees(EMP_ID),
    ManagerEmail NVARCHAR(255) REFERENCES Managers(M_EMAIL),
    FromDate DATETIME,
    ToDate DATETIME,
    TotalDays FLOAT,
    Reason NVARCHAR(MAX),
	LeaveStatus NVARCHAR(50) DEFAULT 'Pending' 
);


-- Employees
INSERT INTO Employees (EMP_NAME, EMP_EMAIL, EMP_PASS, TOTAL_LEAVE)
VALUES
    ('John Doe', 'john.doee@example.com', 'password123', 20),
    ('Alice Smith', 'alice.smiteh@example.com', 'pass123', 20),
    ('Bob Johnson', 'bob.johneson@example.com', 'qwerty', 20),
    ('Emily Brown', 'emily.breown@example.com', 'abc123', 20),
    ('Michael Davis', 'michael.edavis@example.com', 'password', 20);


-- Managers
INSERT INTO Managers (M_NAME, M_EMAIL, M_PASS, ISADMIN)
VALUES
    ('Manager1', 'manager1@example.com', 'managerpass', 1),
    ('Manager2', 'manager2@example.com', 'passmanager', 1),
    ('Manager3', 'manager3@example.com', 'manager123', 1);

-- LeaveRequests
INSERT INTO LeaveRequests (EmpId, ManagerEmail, FromDate, ToDate, TotalDays, Reason, LeaveStatus)
VALUES
    (1006, 'manager2@example.com', '2023-05-05', '2023-05-07', 3, 'Personal reasons', 'Pending'),
    (1007, 'manager3@example.com', '2023-06-10', '2023-06-15', 6, 'Medical leave', 'Approved'),
    (1008, 'manager1@example.com', '2023-07-01', '2023-07-02', 2, 'Attending a conference', 'Approved'),
    (1009, 'manager2@example.com', '2023-08-15', '2023-08-20', 6, 'Vacation with family', 'Pending');


select * from LeaveRequests
select * from Employees

SELECT
    CASE
        WHEN MONTH(FromDate) >= 4 THEN 'FY-' + CONVERT(NVARCHAR(4), YEAR(FromDate))
        ELSE 'FY-' + CONVERT(NVARCHAR(4), YEAR(FromDate) - 1)
    END AS FinancialYear,
    EmpId,
    FromDate,
    ToDate,
    TotalDays,
    Reason,
    LeaveStatus
FROM
    LeaveRequests
ORDER BY
    FinancialYear, EmpId;



drop table Employees
drop table Managers
drop table LeaveRequests
