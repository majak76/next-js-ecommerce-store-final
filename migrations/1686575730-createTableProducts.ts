import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
CREATE TABLE products (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
first_name varchar(30) NOT NULL,
price varchar(30) NOT NULL,
type varchar(30) NOT NULL,
text varchar(40)
)
`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products

`;
}
