interface api{
  requestfunc: (...val: any) => Promise<any>
}

export async function ApiHandler({ requestfunc }: api): Promise<any> {
  try {
    const response = await requestfunc();
    if(response.status == 'success'){
      return response.data; // Mengembalikan seluruh respons jika tidak "success"
    }else if(response.status == 'error'){
      return response
    }

    // return 1
  } catch (error) {
    // console.error("Error in ApiHandler:", error);
    throw error; // Melempar error agar bisa ditangani di tempat lain
  }
}