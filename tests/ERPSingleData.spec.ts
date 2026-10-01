import { test } from '../hooks/ERPHooks'
import { SuppliersPage } from '../Pages/SuppliersPage';
import { CustomersPage } from '../Pages/CustomersPage';
import { StockItemsPage } from '../Pages/StockItemsPage';
test.describe('ERP Inventroy Management',()=>
{
    // first test case for supplier module
    test('Supplier With Single data',async({page})=>
    {
        const sup = new SuppliersPage(page)
        await sup.NavigateToSupplier()
        await sup.AddSupplierDeatils
        (
            "Ramu",
            "Hyd1",
            "Hyderabad",
            "India",
            "QedgeTech",
            "87654322",
            "Test@gmail.com",
            "986754321",
            "New Supplier"

        )
        await sup.handleAlerts()
        await sup.supplierTable()
    })
    //----------------------customer module----------------------
    test('Customer Module',async({page})=>
    {
        //create object for customerpage file
        const cus = new CustomersPage(page)
        await cus.NavigateToCustomer()
        await cus.AddcustomerDeatils
        (
            'New Customer',
            'Kadiri',
            'atp',
            'India',
            'ranga',
            '9876543432',
            'Test2@gmail.com',
            '87654321',
            'Add new Customer'
        )
        await cus.handleAlerts()
        await cus.customerTable()

    })
   //----------------------Stockitem module----------------------
   test('StockitemsPage With Single data', async ({ page }) => 
   {
        const stock = new StockItemsPage(page);
        await stock.NavigateToStock();
        await stock.addStockDetails
        (
           'First Category',
            'Akhilesh1',
            'item',
            'sasa',
            '8500.00',
            '10500.00',
            'Latest model, 2-year warranty'
        );
       await stock.confirmDialog();
       await stock.stockTable();
    });

})