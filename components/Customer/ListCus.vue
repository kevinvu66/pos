<template>
  <!-- <li class="">
          <div class="border-4 border-black w-8/12 ml-60 my-8 pl-0 rounded">
            <div class="table table-fixed border-spacing-2">
              <h3 class="table-cell font-bold">{{name}}</h3>

              <button class="table-cell">sửa</button>
              <button class="table-cell">xóa</button>
            </div>
            <div class="w-4/5 m-auto table table-fixed border-spacing-2">
              <h4 class="table-cell">số điện thoại:</h4>
              <h4 class="table-call">{{sdt}}</h4>
            </div>
            <div class="w-4/5 m-auto table table-fixed border-spacing-2">
              <h4 class="table-cell">Email</h4>
              <h4 class="table-call">{{mail}}</h4>
            </div>
            <div class="w-4/5 m-auto table table-fixed border-spacing-2">
              <h4 class="table-cell">Hạng thành viên:</h4>
              <h4 class="table-call">{{hang}}</h4>
            </div>
            <div class="w-4/5 m-auto table table-fixed border-spacing-2">
              <h4 class="table-cell">Doanh thu:</h4>
              <h4 class="table-call"> {{doanhthu}}</h4>
            </div>
          </div>
        </li>
      -->
  <li>
    <div
      class="mx-auto w-8/12 h-auto border-2 border-black my-5 text-left py-2"
    >
      <div class="hang my-2.5 relative">
        <h3 class="ml-4 uppercase font-bold">{{name}}</h3>
        <button class="absolute top-0 right-11 text-blue-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"
            />
            <path
              d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"
            />
          </svg>
        </button>
        <button class="absolute top-0 right-4 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="hang my-2.5 relative">
        <h3 class="ml-4">Số điện thoại</h3>
        <h3 class="absolute right-4 top-0">{{sdt}}</h3>
      </div>
      <div class="hang my-2.5 relative">
        <h3 class="ml-4">Email:</h3>
        <h3 class="absolute right-4 top-0">{{mail}}</h3>
      </div>
      <div class="hang my-2.5 relative">
        <h3 class="ml-4">Hạng thành viên:</h3>
        <h3 class="absolute right-4 top-0">{{hang}}</h3>
      </div>
      <div class="hang my-2.5 relative">
        <h3 class="ml-4">Doanh thu:</h3>
        <h3 class="absolute right-4 top-0">{{doanhthu}}</h3>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    sdt: {
      type: String,
      default: "",
    },
    mail: {
      type: String,
      require: true,
    },
    hang: {
      type: String,
      require: true,
    },
    doanhthu: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style>
</style>