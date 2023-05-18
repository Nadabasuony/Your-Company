using AngularAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
[EnableCors("_myAllowSpecificOrigins")]
public class StudentController : ControllerBase
{
	private readonly SchoolContext _context;

	public StudentController(SchoolContext context)
	{
		_context = context;
	}

	// GET: api/Student
	[HttpGet]
	public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
	{
		if (_context.Students == null)
		{
			return NotFound();
		}
		return await _context.Students.ToListAsync();
	}

	// GET: api/Student/5
	[HttpGet("{id}")]
	public async Task<ActionResult<Student>> GetStudent(int id)
	{
		if (_context.Students == null)
		{
			return NotFound();
		}
		var student = await _context.Students.FindAsync(id);

		if (student == null)
		{
			return NotFound();
		}

		return student;
	}

	// PUT: api/Student/5
	// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
	[HttpPut("{id}")]
	public async Task<IActionResult> PutStudent(int id, Student student)
	{
		if (id != student.Id)
		{
			return BadRequest();
		}

		_context.Entry(student).State = EntityState.Modified;

		try
		{
			await _context.SaveChangesAsync();
		}
		catch (DbUpdateConcurrencyException)
		{
			if (!StudentExists(id))
			{
				return NotFound();
			}
			else
			{
				throw;
			}
		}

		return NoContent();
	}

	// POST: api/Student
	// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
	[HttpPost]
	public async Task<ActionResult<Student>> PostStudent(Student student)
	{
		if (_context.Students == null)
		{
			return Problem("Entity set 'SchoolContext.Students'  is null.");
		}
		_context.Students.Add(student);
		try
		{
			await _context.SaveChangesAsync();
		}
		catch (DbUpdateException)
		{
			if (StudentExists(student.Id))
			{
				return Conflict();
			}
			else
			{
				throw;
			}
		}

		return CreatedAtAction("GetStudent", new { id = student.Id }, student);
	}

	// DELETE: api/Student/5
	[HttpDelete("{id}")]
	public async Task<IActionResult> DeleteStudent(int id)
	{
		if (_context.Students == null)
		{
			return NotFound();
		}
		var student = await _context.Students.FindAsync(id);
		if (student == null)
		{
			return NotFound();
		}

		_context.Students.Remove(student);
		await _context.SaveChangesAsync();

		return NoContent();
	}

	private bool StudentExists(int id)
	{
		return (_context.Students?.Any(e => e.Id == id)).GetValueOrDefault();
	}
}
