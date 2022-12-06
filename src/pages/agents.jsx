import React, { useEffect, useState } from "react";
import { Formik } from "formik";

//components
import Select from "react-select";
import Topbar from "../layouts/common/topbar";
import SearchBar from "../layouts/common/search-bar";
import {
  TableHeading,
  TableBody,
  TableRow,
} from "../components/common/table-components";
import Button from "../components/common/button";
import Table from "../components/common/table";
import { Modal, ModalBody, ModalHeader } from "../components/common/modal";
import { useDispatch, useSelector } from "react-redux";
import { depositAction, getAllTransactionsAction } from "../store/transaction/transaction.actions";

function Agents() {
  const [addNewUserModal, setAddNewUserModal] = useState(false);
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.account);
  const { allAgents, loadingAllAgentsStatus, isAddingAgentstatus } =
    useSelector((state) => state.agents);

  const breadcrumb = [{ title: "All Pump Agents", link: "" }];

  const headings = [
    "Agent Name",
    "Agent Email",
    "Location",
    "Hotline",
    "Operation Status",
  ];

  useEffect(() => {
    dispatch(getAllTransactionsAction());
  }, []);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Not Active" },
  ];

  return (
    // <div>
    //   <Topbar breadcrumb={breadcrumb} />

    //   <div className="between-start page-top">
    //     <h2 className="table-title">All Pump Agents</h2>

    //     <div className="end space-x-3 xl:space-x-5">
    //       <SearchBar className="w-64 xl:w-80" />
    //     </div>
    //   </div>

    //   <div className="between pt-8">
    //     <div className="space-x-3 start"></div>

    //     <div className="end space-x-3 xl:space-x-5">
    //       <Button
    //         onClick={() => {
    //           setAddNewUserModal(!addNewUserModal);
    //         }}
    //         className="bg-warning-soft text-primary rounded-lg py-3"
    //       >
    //         <svg
    //           className="w-4 h-4"
    //           viewBox="0 0 18 18"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <g fill="currentColor">
    //             <path d="M15.375 7.6425H13.2075C11.43 7.6425 9.9825 6.195 9.9825 4.4175V2.25C9.9825 1.8375 9.645 1.5 9.2325 1.5H6.0525C3.7425 1.5 1.875 3 1.875 5.6775V12.3225C1.875 15 3.7425 16.5 6.0525 16.5H11.9475C14.2575 16.5 16.125 15 16.125 12.3225V8.3925C16.125 7.98 15.7875 7.6425 15.375 7.6425ZM9.21 11.835L7.71 13.335C7.6575 13.3875 7.59 13.4325 7.5225 13.455C7.455 13.485 7.3875 13.5 7.3125 13.5C7.2375 13.5 7.17 13.485 7.1025 13.455C7.0425 13.4325 6.9825 13.3875 6.9375 13.3425C6.93 13.335 6.9225 13.335 6.9225 13.3275L5.4225 11.8275C5.205 11.61 5.205 11.25 5.4225 11.0325C5.64 10.815 6 10.815 6.2175 11.0325L6.75 11.58V8.4375C6.75 8.13 7.005 7.875 7.3125 7.875C7.62 7.875 7.875 8.13 7.875 8.4375V11.58L8.415 11.04C8.6325 10.8225 8.9925 10.8225 9.21 11.04C9.4275 11.2575 9.4275 11.6175 9.21 11.835Z" />
    //             <path d="M13.0725 6.60786C13.785 6.61536 14.775 6.61536 15.6225 6.61536C16.05 6.61536 16.275 6.11286 15.975 5.81286C14.895 4.72536 12.96 2.76786 11.85 1.65786C11.5425 1.35036 11.01 1.56036 11.01 1.98786V4.60536C11.01 5.70036 11.94 6.60786 13.0725 6.60786Z" />
    //           </g>
    //         </svg>
    //         Add Agent
    //       </Button>
    //     </div>
    //   </div>

    //   <div className="w-full pt-10">
    //     <Table
    //       className="w-full"
    //       isLoading={loadingAllAgentsStatus === "loading"}
    //     >
    //       <TableHeading
    //         className="text-sm xl:text-base"
    //         headings={headings}
    //         cellClass="last:text-right"
    //       />

    //       {allAgents?.length > 0 ? (
    //         <TableBody>
    //           {allAgents.map((item, idx) => {
    //             return (
    //               <TableRow key={idx}>
    //                 <td className="xl:w-[5%]">{item?.agent_name}</td>

    //                 <td className="xl:w-[12%]">{item?.email}</td>

    //                 <td className="xl:w-[12%]">{item?.location}</td>

    //                 <td className="xl:w-[12%]">{item?.hotline}</td>

    //                 <td className="w-[12%]">
    //                   <div className="end">
    //                     <StatusLabel
    //                       className={`${
    //                         item?.status === "active"
    //                           ? "bg-success-soft text-success-dark"
    //                           : "bg-danger-10 text-error"
    //                       }`}
    //                     >
    //                       {item?.status}
    //                     </StatusLabel>
    //                   </div>
    //                 </td>
    //               </TableRow>
    //             );
    //           })}
    //         </TableBody>
    //       ) : (
    //         <div className="center min-h-[30vh]">No Agents Yet</div>
    //       )}
    //     </Table>
    //   </div>

    //   <Modal state={addNewUserModal}>
    //     <div className="py-6 bg-white rounded-xl">
    //       <ModalHeader
    //         close={() => {
    //           setAddNewUserModal(!addNewUserModal);
    //         }}
    //       >
    //         Add New Agent
    //       </ModalHeader>

    //       <ModalBody>
    //         <Formik
    //           initialValues={{
    //             deposit: "",
    //           }}
    //           validate={(values) => {
    //             const errors = {};
               
    //             if (!values.deposit) {
    //               errors.deposit = "Required";
    //             }
    //             return errors;
    //           }}
    //           onSubmit={async (values, { setSubmitting, setErrors }) => {
    //             dispatch(
    //               depositAction({
    //                 deposit: values.deposit,
    //               })
    //             );
    //           }}
    //         >
    //           {(formik) => (
    //             <form onSubmit={formik.handleSubmit} className="w-full">
    //               <div className="form-row">
    //                 <label className="block leading-[18px]">Enter an amount</label>

    //                 <input
    //                   type="text"
    //                   name="deposit"
    //                   onChange={(e) => {
    //                     formik.handleChange(e);
    //                     if (errorMessage.deposit) {
    //                       formik.errors.deposit = "";
    //                     }
    //                   }}
    //                   onBlur={formik.handleBlur}
    //                   value={formik.values.deposit}
    //                   placeholder=""
    //                   className="input location bg-inherit min-w-full"
    //                 />

    //                 <p className="form-error px-4">
    //                   {formik.errors.deposit &&
    //                     formik.touched.deposit &&
    //                     formik.errors.deposit}
    //                 </p>
    //               </div>

                  

    //               <div className="relative">
    //                 {isAddingAgentstatus === "loading" ? (
    //                   <Spinner />
    //                 ) : (
    //                   <Button
    //                     type="submit"
    //                     disabled={formik.isSubmitting}
    //                     className="w-full"
    //                   >
    //                     Add User
    //                   </Button>
    //                 )}
    //               </div>
    //             </form>
    //           )}
    //         </Formik>
    //       </ModalBody>
    //     </div>
    //   </Modal>
    // </div>
    <>sdck</>
  );
}

export default Agents;
