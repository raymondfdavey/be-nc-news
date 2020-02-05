exports.up = function(knex) {
  console.log("START");

  return knex.schema.createTable("articles", articlesTable => {
    articlesTable.increments("article_id").primary();
    articlesTable.string("title");
    articlesTable.text("body", "longtext");
    articlesTable.integer("votes").defaultTo(0);
    articlesTable.string("topic").references("topics.slug");
    articlesTable.string("author").references("users.username");
    articlesTable.timestamp("created_at");
  });
};

exports.down = function(knex) {
  console.log("START");

  return knex.schema.dropTable("articles");
};
