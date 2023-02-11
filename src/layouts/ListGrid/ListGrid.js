import React from "react";

const ListGrid = (children) => {
  return (
    <section className="container m-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
      {children}
    </section>
  );
};

export default ListGrid;
