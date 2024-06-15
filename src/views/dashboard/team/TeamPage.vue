<template>
  <main class="dark:bg-gray-900 lg:ml-[105px] h-full">
    <!-- Breadcrumb -->

    <div
      class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="mb-1 w-full">
        <div class="mb-4">
          <nav class="flex mb-5" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2">
              <li class="inline-flex items-center">
                <a
                  href="#"
                  class="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {{ $t("dashboard.header.title") }}
                </a>
              </li>
              <span class="mx-2 text-gray-400">/</span>

              <li>
                <div class="flex items-center">
                  <a
                    href="#"
                    class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                    >{{ $t("teamMembers.header.teamMembers") }}</a
                  >
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div class="mb-4 text-lg font-semibold">
          <h1>{{ $t("teamMembers.header.teamMembers") }}</h1>
        </div>
        <div class="sm:flex">
          <div
            class="hidden items-center mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700"
          >
            <form class="lg:pr-3" action="#" method="GET">
              <label for="users-search" class="sr-only">{{
                $t("teamMembers.header.tableTopBar.searchName")
              }}</label>
              <div class="relative mt-1 lg:w-64 xl:w-96">
                <sw-input
                  type="text"
                  name="email"
                  id="users-search"
                  class="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full"
                  :placeholder="$t('teamMembers.header.tableTopBar.searchName')"
                >
                  <template #prefix>
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                      <search-icon></search-icon>
                    </div>
                  </template>
                </sw-input>
              </div>
            </form>
            <div class="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
              <sw-button
                color="transparent"
                :disabled="selectedItem.length == 0"
                class="inline-flex justify-center disabled:cursor-not-allowed p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <delete-icon
                  @click="showDeleteConfirmationDialog"
                  :color="selectedItem.length == 0 ? 'currentColor' : 'red'"
                ></delete-icon>
              </sw-button>
            </div>
          </div>
          <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
            <button
              @click="addNewTeamMemberTrigger"
              type="button"
              class="h-[42px] inline-flex justify-center items-center py-2 px-3 w-1/2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <img :src="getSvgIcon('plus')" width="24" height="24" />
              {{ $t("teamMembers.header.tableTopBar.addUser") }}
            </button>

            <button
              id="filterDropdownButton"
              data-dropdown-toggle="filterDropdown"
              class="h-[42px] w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <filter-icon></filter-icon>
              {{ $t("teamMembers.header.tableTopBar.filter.title") }}
              <arrowdown-icon></arrowdown-icon>
            </button>
            <div
              id="filterDropdown"
              class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <div class="flex justify-between items-center">
                <h6
                  class="mb-3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {{ $t("teamMembers.header.tableTopBar.filter.fields.title") }}
                </h6>
                <h6
                  @click="clearItemFilter"
                  class="mb-3 text-[11px] font-medium text-blue-500 dark:text-white underline cursor-pointer"
                >
                  {{ $t("teamMembers.header.tableTopBar.filter.fields.clear") }}
                </h6>
              </div>
              <ul
                class="space-y-2 text-sm"
                aria-labelledby="filterDropdownButton"
              >
                <li class="flex items-center">
                  <input
                    id="permission"
                    v-model="filterType.permission"
                    type="checkbox"
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    @change="toggleHideField"
                  />
                  <label
                    for="permission"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    {{
                      $t(
                        "teamMembers.header.tableTopBar.filter.fields.fieldsOptions.permission"
                      )
                    }}
                  </label>
                </li>
                <li class="flex items-center">
                  <input
                    id="lastLogin"
                    v-model="filterType.lastLogin"
                    type="checkbox"
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    @change="toggleHideField"
                  />
                  <label
                    for="lastLogin"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    {{
                      $t(
                        "teamMembers.header.tableTopBar.filter.fields.fieldsOptions.lastLogin"
                      )
                    }}
                  </label>
                </li>
                <li class="flex items-center">
                  <input
                    id="memberSince"
                    v-model="filterType.memberSince"
                    type="checkbox"
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    @change="toggleHideField"
                  />
                  <label
                    for="member-since"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    {{
                      $t(
                        "teamMembers.header.tableTopBar.filter.fields.fieldsOptions.memberSince"
                      )
                    }}
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="dark:bg-gray-900">
      <div class="mx-auto">
        <sw-table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <sw-table-head
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <sw-table-head-cell class="">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  v-model="selectAllItem"
                />
                <label for="checkbox-all" class="sr-only">checkbox</label>
              </div>
            </sw-table-head-cell>
            <sw-table-head-cell class="px-4 py-3">
              {{
                $t(
                  "teamMembers.header.tableTopBar.filter.fields.fieldsOptions.name"
                )
              }}
            </sw-table-head-cell>
            <sw-table-head-cell class="px-4 py-3" v-if="!filterType.permission">
              {{
                $t(
                  "teamMembers.header.tableTopBar.filter.fields.fieldsOptions.permission"
                )
              }}
            </sw-table-head-cell>
            <sw-table-head-cell class="px-4 py-3" v-if="!filterType.lastLogin">
              {{
                $t(
                  "teamMembers.header.tableTopBar.filter.fields.fieldsOptions.lastLogin"
                )
              }}
            </sw-table-head-cell>
            <sw-table-head-cell
              class="px-4 py-3"
              v-if="!filterType.memberSince"
            >
              {{
                $t(
                  "teamMembers.header.tableTopBar.filter.fields.fieldsOptions.memberSince"
                )
              }}
            </sw-table-head-cell>
            <sw-table-head-cell class="px-4 py-3">
              <span class="sr-only">Actions</span>
            </sw-table-head-cell>
          </sw-table-head>
          <sw-table-body>
            <sw-table-row v-for="(item, index) in items" :key="index">
              <sw-table-cell>
                <div class="flex items-center">
                  <input
                    number
                    type="checkbox"
                    :value="item.id"
                    v-model="selectedItem"
                    class="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-1" class="sr-only">checkbox</label>
                </div>
              </sw-table-cell>
              <sw-table-cell
                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class="flex items-center space-x-6">
                  <img class="w-10 h-10 rounded-full" :src="item.avatar" />
                  <div
                    class="text-sm font-normal text-gray-500 dark:text-gray-400"
                  >
                    <div
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      {{ item.name }}
                    </div>
                    <div
                      class="text-sm font-normal text-gray-500 dark:text-gray-400"
                    >
                      {{ item.email }}
                    </div>
                  </div>
                </div>
              </sw-table-cell>
              <sw-table-cell v-if="!filterType.permission"
                >{{ item.permission }}
              </sw-table-cell>
              <sw-table-cell v-if="!filterType.lastLogin"
                >{{ item.lastLogin }}
              </sw-table-cell>
              <sw-table-cell v-if="!filterType.memberSince"
                >{{ item.memberSince }}
              </sw-table-cell>
              <sw-table-cell class="px-4 py-3 flex items-center justify-end">
                <button
                  type="button"
                  :key="index"
                  :data-dropdown-toggle="`dropdown${index}`"
                  class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                </button>
                <div
                  :id="`dropdown${index}`"
                  class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="text-sm text-gray-700 dark:text-gray-200"
                    :aria-labelledby="`dropdown${index}`"
                  >
                    <li>
                      <a
                        href="javascript:void(0)"
                        @click="editNewTeamMemberTrigger(item)"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {{ $t("teamMembers.addOrEditModal.action.edit") }}
                      </a>
                    </li>
                  </ul>
                  <div>
                    <a
                      href="#"
                      @click="deleteSingleTeamMemberTrigger(item)"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {{ $t("teamMembers.addOrEditModal.action.delete") }}
                    </a>
                  </div>
                </div>

                <!-- <sw-dropdown button-color="transparent" :showDropDownArrow="false" :closeInside="true">
                  <template #title>
                    <button
                      id="action-dropdown-button"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                        />
                      </svg>
                    </button>
                  </template>

                  <div
                  class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="action-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Show</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Edit</a
                      >
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >Delete</a
                    >
                  </div>
                </div>
                  
                </sw-dropdown> -->

                <!-- <template v-slot:activator="{ on }">
                  <button
                    v-on="{ click: () => {} }"
                    id="action-dropdown-button"
                    data-dropdown-toggle="apple-imac-27-dropdown"
                    class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    type="button"
                  >
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                  </button>
                </template> -->
              </sw-table-cell>
            </sw-table-row>
          </sw-table-body>
        </sw-table>
      </div>
    </section>

    <!-- <div
      class="sticky right-0 bottom-0 items-center p-4 w-full bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center mb-4 sm:mb-0">
        <a
          href="#"
          class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
          >Showing
          <span class="font-semibold text-gray-900 dark:text-white">1-20</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white"
            >2290</span
          ></span
        >
      </div>
      <div class="flex items-center space-x-3">
        <nav aria-label="Page navigation example">
          < class="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >Previous</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >4</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >5</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >Next</a
              >
            </li>
          </
        </nav>
      </div>
    </div> -->
    <sw-Confirmation-dialog
      @continueDialogAction="deleteSelectedTeamMembers()"
      ref="confirmationDialog"
    ></sw-Confirmation-dialog>

    <sw-Confirmation-dialog
      @continueDialogAction="deleteTeamMember()"
      ref="showDeleteTeamMemberModal"
    ></sw-Confirmation-dialog>

    <sw-modal
      v-if="showAddTeamMemberModal"
      :notEscapable="false"
      :persistent="false"
      :disabled="sendingInvitationRequest"
      size="2xl"
      :onClose="hideInvitationModal"
    >
      <template #header>
        <div class="text-xl font-bold">
          {{ $t("teamMembers.addOrEditModal.title") }}
        </div>
      </template>
      <template #body>
        <!-- Loading Skeleton -->
        <!-- <div v-if="loadingRequest" role="status" class="animate-pulse">
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5"
        ></div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"
        ></div>
        <div class="flex items-center mt-4">
          <svg
            class="w-8 h-8 text-gray-200 dark:text-gray-700 me-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
            />
          </svg>
          <div
            class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"
          ></div>
          <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div> -->

        <p class="text-sm text-gray-600 mb-3">
          {{ $t("teamMembers.addOrEditModal.description") }}
        </p>

        <div class="mt-10">
          <div class="grid gap-1 grid-cols-12 items-center mt-5">
            <div class="col-span-12">
              <sw-input
                :placeholder="$t('teamMembers.addOrEditModal.field.name')"
                type="text"
                class="w-auto"
                required
              ></sw-input>
            </div>
            <div class="col-span-12 mt-5">
              <sw-input
                :placeholder="$t('teamMembers.addOrEditModal.field.email')"
                type="text"
                class="w-auto"
                required
              ></sw-input>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div
          class="flex flex-row justify-space-between items-center justify-between"
        >
          <div class="flex">
            <sw-button
              class="w-[200px] p-3 mr-5"
              :loading="sendingInvitationRequest"
              :disabled="sendingInvitationRequest"
              @click="sendEmailInvitation"
              >{{ $t("teamMembers.addOrEditModal.button.send") }}</sw-button
            >
          </div>
          <div class="text-sm text-gray-500">
            {{ $t("teamMembers.addOrEditModal.invitationCopyLinkText") }}
            <span class="cursor-pointer text-blue-500 inline-flex">
              {{ $t("teamMembers.addOrEditModal.invitationCopyLinkAction") }}
              <span class="ml-1"><copy-icon class="w-[20px]"></copy-icon></span
            ></span>
          </div>
        </div>
      </template>
    </sw-modal>

    <sw-modal
      v-if="showEditTeamMemberModal"
      :notEscapable="false"
      :persistent="false"
      :disabled="sendingInvitationRequest"
      size="2xl"
      :onClose="hideEditTeamMembModal"
    >
      <template #header>
        <div class="text-xl font-bold">
          {{ $t("teamMembers.addOrEditModal.edit.title") }} -
          {{ activeUserData.name }}
        </div>
      </template>
      <template #body>

        <div class="mt-10 mb-11">
          <div class="grid gap-1 grid-cols-12 items-center mt-5">
            <div class="col-span-12">
              <sw-input
                v-model="activeUserData.name"
                :placeholder="$t('teamMembers.addOrEditModal.field.name')"
                type="text"
                class="w-auto"
                required
              ></sw-input>
            </div>
            <div class="col-span-12 mt-5">
              <sw-input
                v-model="activeUserData.email"
                :placeholder="$t('teamMembers.addOrEditModal.field.email')"
                type="text"
                class="w-auto"
                required
              ></sw-input>
            </div>

            <div class="col-span-12 mt-5">
              <sw-select
                class="w-full"
                v-model="activeUserData.permission"
                :placeholder="$t('teamMembers.addOrEditModal.permission')"
                :options="memberPermissionList"
                required
              ></sw-select>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div
          class="flex flex-row justify-space-between items-center justify-between"
        >
          <div class="flex">
            <sw-button
              class="w-[200px] p-3 mr-5"
              :loading="loadingEditRequest"
              :disabled="loadingEditRequest"
              @click="persistEditChanges"
              >{{
                $t("teamMembers.addOrEditModal.edit.action.saveChanges")
              }}</sw-button
            >
          </div>
        </div>
      </template>
    </sw-modal>
  </main>
</template>

<script setup lang="ts">
import { Ref, ref, onMounted, computed, watch } from "vue";
import {
  SwTable,
  SwTableHead,
  SwTableCell,
  SwTableHeadCell,
  SwTableBody,
  SwTableRow,
  SwModal,
  SwInput,
  SwButton,
  CopyIcon,
  DeleteIcon,
  ArrowdownIcon,
  FilterIcon,
  SearchIcon,
  SwConfirmationDialog,
  SwSelect,
} from "@/global";

import { initDropdowns } from "flowbite";
import { useImageUrl } from "@/utils/helpers";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  initDropdowns();
  const routeQueryParams: any = route.query.sort;

  if (routeQueryParams && Array.isArray(routeQueryParams)) {
    routeQueryParams.forEach((queryParam) => {
      console.log(queryParam);
      // Split the string into paramName and paramValue
      const [paramName, paramValue] = queryParam.split("=");

      // Check if paramName matches any key in filterType
      if (filterType.value.hasOwnProperty(paramName)) {
        // Convert paramValue to a boolean and update filterType
        filterType.value[paramName as keyof typeof filterType.value] =
          paramValue === "true";
      }
    });
  }
});

const { getSvgIcon } = useImageUrl();

const showAddTeamMemberModal = ref(false);

function addNewTeamMemberTrigger() {
  showAddTeamMemberModal.value = !showAddTeamMemberModal.value;
}

const sendingInvitationRequest = ref(false);
function sendEmailInvitation() {
  sendingInvitationRequest.value = true;
  // showAddTeamMemberModal.value = false;
}

function hideInvitationModal() {
  showAddTeamMemberModal.value = false;
  sendingInvitationRequest.value = false;
}
function toggleHideField() {
  addQueryParamToRoute();
}
const filterType = ref({
  permission: false,
  memberSince: false,
  lastLogin: false,
});

function addQueryParamToRoute() {
  const param = Object.keys(filterType.value).map((key) => {
    return (
      //@ts-ignore
      encodeURIComponent(key) + "=" + encodeURIComponent(filterType.value[key])
    );
  });

  router.replace({ query: { sort: param } });
}

function clearItemFilter() {
  router.replace({ query: {} });

  // uncheck selected option
  for (const key in filterType.value) {
    filterType.value[key as keyof typeof filterType.value] = false;
  }
}

watch(filterType.value, async (newFilterType) => {
  console.log(newFilterType);
});

interface ItemsType {
  id: number;
  name: string;
  email: string;
  avatar: string;
  lastLogin: string;
  memberSince: string;
  permission: string;
}

//Todo: remove test data
const items: Ref<ItemsType[]> = ref([
  {
    id: 1,
    name: "Neon Emmanuel",
    email: "neonemmanuel@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 2,
    name: "Cady Joe",
    email: "neonemmanuel@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Auditor",
  },
  {
    id: 3,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 4,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 5,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 6,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 7,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 8,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 9,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 10,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 11,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 12,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 12,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 13,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
  {
    id: 14,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
  },
]);

// Explicitly type `selectedItem` as a Ref of number array
const selectedItem: Ref<number[]> = ref([]);

const selectAllItem = computed({
  get() {
    // Check if all items are selected
    return items.value && items.value.length > 0
      ? items.value.every((item) => selectedItem.value.includes(item.id))
      : false;
  },
  set(value) {
    if (value) {
      // Select all items by setting selectedItem to all item ids
      selectedItem.value = items.value.map((item) => item.id);
    } else {
      // Clear selection
      selectedItem.value = [];
    }
  },
});

const confirmationDialog = ref();

function showDeleteConfirmationDialog() {
  //chek if their is selected items
  //using Component props fallback
  if (selectedItem.value.length > 0) {
    confirmationDialog.value.showDialog();
  }
}

function deleteSelectedTeamMembers() {
  // Default true;
  confirmationDialog.value.dialogIsLoading();
}

const activeUserData = ref();

const showEditTeamMemberModal = ref(false);
function editNewTeamMemberTrigger(item: ItemsType) {
  activeUserData.value = item;
  showEditTeamMemberModal.value = true;
}

const showDeleteTeamMemberModal = ref();
function deleteSingleTeamMemberTrigger(item: ItemsType) {
  if (item) {
    activeUserData.value = item;
    showDeleteTeamMemberModal.value.showDialog();
  }
}

function deleteTeamMember() {
  alert("clicked");
  showDeleteTeamMemberModal.value.dialogIsLoading();
}

const loadingEditRequest = ref(false);
function hideEditTeamMembModal() {
  showEditTeamMemberModal.value = false;
  loadingEditRequest.value = false;
}

function persistEditChanges() {
  //activeUserData.value
  loadingEditRequest.value = true;
}

const memberPermissionList = [
  {
    name: "Administrator",
    value: "Administrator",
  },
  {
    name: "Auditor",
    value: "Auditor",
  },
];
</script>
