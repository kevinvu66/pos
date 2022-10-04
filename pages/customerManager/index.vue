<template>
  <div class="text-center">
    <h1>Quản lý khách hàng - customerManager</h1>
    <nuxt-link to="/">
      <b-button variant="outline-danger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        Trở về</b-button
      >
    </nuxt-link>
    <div class="flex justify-center my-7 relative">
      <input
        class="border-2 border-neutral-600 w-8/12 h-14 pl-3 rounded"
        placeholder="Nhập tên khách hàng"
      />
      <button class="absolute right-64 top-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div class="flex justify-center h-18">
      <button
        class="bg-red-500 w-8/12 h-18 rounded h-14 relative text-white"
        @click.prevent="openModal"
      >
        Tạo khách hàng mới
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 absolute ml-96 top-1/3 mt-0"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <v-modal name="CreateCusModal">
      <div class="test_body">
        <h1>Tạo khách hàng mới</h1>
        <form action="">
          <label for="fname">Họ và tên(*)</label><br />
          <input class="border-2 border-neutral-400 rounded" type="text" id="fname" name="fname" value="" placeholder="-Vui lòng nhập-" /><br />
          <label for="lname">Số điện thoại(*):</label><br />
          <input class="border-2 border-neutral-400 rounded" type="text" id="lname" name="lname" value="" placeholder="-Vui lòng nhập" /><br /><br />

          <div class="form_group d_flex justify_content">
            <button class="btn btn_danger" @click.prevent="closeModal">
              Hủy
            </button>
            <button class="btn btn_success ml_3" @click.prevent="createModal">
              Tạo mới
            </button>
          </div>
        </form>
      </div>
    </v-modal>
<ul>
    <ListCusVue
      v-for="cusr in cus"
      :name="cusr.name"
      :key="cusr._id"
      :sdt="cusr.sdt"
      :mail="cusr.mail"
      :hang="cusr.hang"
      :doanhthu="cusr.doanhthu"
    />
  </ul>
  </div>
</template>

<script>
import ListCusVue from "../../components/Customer/ListCus.vue";
export default {
  components: {
    ListCusVue,
  },
  fetch(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          cus: [
            {
              _id: 1,
              name: "Nguyễn Văn A",
              sdt: "0382430290",
              mail: "dat@gmail.com",
              hang: "bạc",
              doanhthu: 175000,
            },
            {
              _id: 1,
              name: "Nguyễn Văn B",
              sdt: "0382430290",
              mail: "dat@gmail.com",
              hang: "bạc",
              doanhthu: 175000,
            },
            {
              _id: 1,
              name: "Nguyễn Văn C",
              sdt: "0382430290",
              mail: "dat@gmail.com",
              hang: "bạc",
              doanhthu: 175000,
            },
          ],
        });
      });
    }, 1500)
      .then((data) => {
        context.store.dispatch("setCus", data.cus);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  computed: {
    cus() {
      return this.$store.getters.cus;
    },
  },
  methods: {
    openModal() {
      this.$modal.open({ name: "CreateCusModal" });
    },
    closeModal() {
      this.$modal.close({ name: "CreateCusModal" });
    },
  },
};
</script>

<style>
  

</style>