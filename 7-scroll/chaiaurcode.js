// use indicator width
const content = document.querySelector('.content');

document.addEventListener('scroll', function () {
  if (window.screen.width >= 1024 && window.screen.height >= 768) {
    content.innerHTML += `
    <section>
    <h1>Title new<h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam iste natus, voluptas possimus repellat voluptates neque distinctio corrupti beatae eius aspernatur officiis temporibus eveniet tempore,s impedit quis eveniet deserunt officiis quaerat recusandae nam dicta cupiditate. Nesciunt ab dicta porro omnis dolores architecto sapiente sit aperiam placeat in iure, rem impedit eaque qui aliquam recusandae laborum eligendi animi perspiciatis velit error cumque unde! Ipsum amet numquam, quam neque modi in ad dolores distinctio saepe perferendis necessitatibus autem, minus aspernatur vitae? Aliquid ipsam, aspernatur architecto, officia commodi voluptate magni nisi maiores sunt accusamus delectus fugit porro explicabo animi non molestiae deleniti necessitatibus, quibusdam rem cum.
    </p>
   </section>
  }
    `;
  }
});
