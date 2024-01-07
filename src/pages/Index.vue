<template>
  <MainLayout>
    <header class="mv-header mv-header-bg px-3 px-sm-4">
      <h1 class="fw-bold text-primary">What would you like to embed?</h1>
      <div class="col-md-4 offset-md-4 my-2">
        <form class="position-relative">
          <input
            class="form-control"
            type="url"
            placeholder="Enter a Multividas URL"
            aria-label="url"
          />
          <svg
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-right text-primary position-absolute"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </form>
      </div>
    </header>
    <main class="container px-4 py-2 my-4 py-md-5 my-md-2">
      <div class="card">
        <div class="card-body">
          <p class="lg-lg mb-2">
            Multividas is a <b>'microblogging'</b> system that allows you to send and receive short posts called "threads".
          </p>
          <p class="lg-lg mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            repudiandae fuga quo tenetur deserunt ad culpa, odio eaque
            consectetur laudantium vero quia veniam provident at architecto
            debitis molestiae perferendis aut sapiente incidunt consequuntur
            quae sequi dolore rem. Nulla sint, facilis ut laudantium praesentium
            vero eum accusamus quo perspiciatis nam sapiente molestias amet quam
            nihil doloribus ea, modi quia suscipit similique possimus molestiae
            quis, reprehenderit optio temporibus? Earum dolorem incidunt
            possimus impedit maiores, eaque atque error necessitatibus nesciunt
            adipisci odit aliquam quidem molestias itaque. Maiores laborum quod
            sed dolore dolorum aspernatur autem sint eligendi voluptatibus,
            cupiditate deserunt corrupti facere quos asperiores!
          </p>
        </div>
      </div>
    </main>
  </MainLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Multividas Publish",
  },
};
</script>

<style>
</style>

<style scoped>
input[type="url"] {
  padding-right: 35px;
}

svg.icon-tabler-arrow-right{
  top: 10px;
  right: 10px;
}

input[type="url"]::placeholder {
  color: rgb(162, 162, 162);
}
</style>
